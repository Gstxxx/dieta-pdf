from meal_plans import DietPlan, Meal, Allergen

class BulkingDiet(DietPlan):
    def __init__(self, meals_per_day: int):
        super().__init__("Ganho de Massa", meals_per_day, "bulking")
        self.calories = 3200

    def _setup_meals(self):
        self.meals = [
            Meal(
                "Pré-Treino",
                """
- 2 bananas médias (210 kcal)
- 2 torradas integrais com pasta de amendoim (400 kcal)
- 1 café preto
Total: ~610 kcal
Proteína: 16g | Carboidratos: 70g | Gorduras: 16g
                """,
                {Allergen.GLUTEN, Allergen.NUTS},
                610, 16, 70, 16
            ),
            
            Meal(
                "Pós-Treino",
                """
- 2 scoops whey protein (240 kcal)
- 60g aveia em flocos (225 kcal)
- 1 banana (105 kcal)
- 1 colher de mel (60 kcal)
Total: ~630 kcal
Proteína: 54g | Carboidratos: 65g | Gorduras: 8g
                """,
                {Allergen.LACTOSE, Allergen.GLUTEN},
                630, 54, 65, 8
            ),
            
            # ... outras refeições
        ] 