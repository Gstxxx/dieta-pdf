from dataclasses import dataclass
from typing import List, Set
from datetime import datetime, timedelta

class Allergen:
    LACTOSE = "lactose"
    GLUTEN = "gluten"
    NUTS = "nuts"
    EGGS = "eggs"
    SEAFOOD = "seafood"

@dataclass
class Meal:
    title: str
    content: str
    allergens: Set[str]
    calories: int
    protein: float
    carbs: float
    fats: float

class DietPlan:
    def __init__(self, name: str, meals_per_day: int, goal: str):
        self.name = name
        self.meals_per_day = max(5, min(12, meals_per_day))
        self.goal = goal
        self.allergens = set()
        self.meals: List[Meal] = []
        self._setup_meals()

    def calculate_meal_times(self):
        """Calcula os horários das refeições distribuídos ao longo do dia"""
        wake_up = datetime.strptime("06:00", "%H:%M")
        sleep = datetime.strptime("22:00", "%H:%M")
        total_minutes = (sleep - wake_up).seconds / 60
        interval = total_minutes / (self.meals_per_day - 1)
        
        times = []
        current = wake_up
        for _ in range(self.meals_per_day):
            times.append(current.strftime("%H:%M"))
            current += timedelta(minutes=interval)
        return times

    def _setup_meals(self):
        """Configuração base das refeições - será sobrescrita pelas classes filhas"""
        pass

    def set_allergens(self, allergens):
        self.allergens = set(allergens)

class MaintenanceDiet(DietPlan):
    def __init__(self, meals_per_day: int):
        super().__init__("Manutenção do Shape", meals_per_day, "maintenance")
        self.calories = 2800

    def _setup_meals(self):
        pre_workout = Meal(
            "Pré-Treino",
            """
- 1 banana média
- 1 torrada integral com pasta de amendoim
- 1 café preto
            """,
            {Allergen.GLUTEN, Allergen.NUTS},
            250,
            8,
            35,
            8
        )
        
        post_workout = Meal(
            "Pós-Treino",
            """
- 1 scoop whey protein
- 40g aveia em flocos
- 1 banana
- Canela a gosto
            """,
            {Allergen.LACTOSE, Allergen.GLUTEN},
            350,
            30,
            45,
            6
        )
        
        # Adicionar mais refeições base...

class BulkingDiet(DietPlan):
    def __init__(self, meals_per_day: int):
        super().__init__("Ganho de Massa", meals_per_day, "bulking")
        self.calories = 3200

    def _setup_meals(self):
        # Implementar refeições com mais calorias...
        pass

class CuttingDiet(DietPlan):
    def __init__(self, meals_per_day: int):
        super().__init__("Emagrecimento", meals_per_day, "cutting")
        self.calories = 2200

    def _setup_meals(self):
        # Implementar refeições com menos calorias...
        pass

def create_diet_plan(goal: str, meals_per_day: int):
    """Factory para criar o plano de dieta apropriado"""
    diets = {
        "maintenance": MaintenanceDiet,
        "bulking": BulkingDiet,
        "cutting": CuttingDiet
    }
    return diets[goal](meals_per_day) 