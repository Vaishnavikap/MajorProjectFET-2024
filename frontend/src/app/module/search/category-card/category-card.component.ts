import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category: string='';

  get categoryClass(): string {
    // Generate a class name based on the category
    return `category-${this.category.toLowerCase()}`;

}
}