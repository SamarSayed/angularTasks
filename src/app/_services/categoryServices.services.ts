export class CategoryServices {
    private categories :string[] = [
        "Arts & Crafts",
        "Automotive",
        "Baby",
        "Books",
        "Eletronics",
        "Women's Fashion",
        "Men's Fashion",
        "Health & Household",
        "Home & Kitchen",
        "Military Accessories",
        "Movies & Television",
        "Sports & Outdoors" ,
        "Tools & Home Improvement",
        "Toys & Games"
    ]
    getAllCategories() {
        return this.categories;
    }
}