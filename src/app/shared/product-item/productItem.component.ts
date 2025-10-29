import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { ProductItem } from "../types/productItem";

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [RouterOutlet,
        FormsModule, CurrencyPipe, UpperCasePipe, NgFor, NgIf, RouterLink],
    templateUrl: './productItem.component.html',
    styleUrl: './productItem.component.css',
})
export class ProductItemComponent implements OnChanges {
    @Input() products: ProductItem[] = [];

    @Output() dataEvent = new EventEmitter<number>();

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes['products'].currentValue);
        console.log(changes['products'].previousValue);
    }

    get totalPrice(): string{
        const sum = this.products.reduce((total, item) => {
            return total + item.price;
        }, 0);

        return `Total price: ${sum}`;
    }

    handleDelete = (id: number) => {
        // console.log(id);
        this.dataEvent.emit(id);
    };
}
