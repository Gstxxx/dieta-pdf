from meal_plans import DietPlan
from shared_diet_functions import create_meal_options, setup_meals

class CuttingDiet(DietPlan):
    def __init__(self, meals_per_day: int):
        self.all_meals = create_meal_options()
        super().__init__("Emagrecimento", meals_per_day, "cutting")
        self.calories = 2200
        
    def _setup_meals(self):
        """
        Configura as refeições baseado no número de refeições por dia
        e nas alergias do usuário
        """
        self.meals = setup_meals(self.meals_per_day, self.all_meals, self.allergens) 