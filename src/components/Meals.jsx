import Meal from "./Meal";

export default function Meals() {
    return (
        <section className="container meals">
            <Meal
                name="Greek Salad"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                price="12.99"
            />

            <Meal
                name="Brushetta"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta."
                price="7.99"
            />

            <Meal
                name="Grilled Fish"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta."
                price="7.99"
            />
        </section>
    );
}