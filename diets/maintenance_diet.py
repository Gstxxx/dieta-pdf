from meal_plans import DietPlan, Meal, Allergen

class MaintenanceDiet(DietPlan):
    def __init__(self, meals_per_day: int):
        self.all_meals = self._create_meal_options()
        super().__init__("Manutenção do Shape", meals_per_day, "maintenance")
        self.calories = 2800

    def _setup_meals(self):
        self.meals = []
        
        pre_workout = self._get_suitable_meal("pre_workout")
        post_workout = self._get_suitable_meal("post_workout")
        
        if pre_workout and post_workout:
            self.meals.extend([pre_workout, post_workout])
        
        remaining_meals = self.meals_per_day - 2
        meal_types = ["breakfast", "morning_snack", "lunch", 
                     "afternoon_snack", "dinner", "supper"]
        
        for i in range(remaining_meals):
            meal_type = meal_types[i % len(meal_types)]
            meal = self._get_suitable_meal(meal_type)
            if meal:
                self.meals.append(meal)

    def _get_suitable_meal(self, meal_type):
        suitable_meals = [
            meal for meal in self.all_meals[meal_type]
            if not (meal.allergens & self.allergens)
        ]
        return suitable_meals[0] if suitable_meals else None

    def _create_meal_options(self):
        return {
            "pre_workout": [
                Meal(
                    "Pré-Treino 1",
                    """
- 1 banana média (105 kcal)
- 1 torrada integral com pasta de amendoim (200 kcal)
- 1 café preto
Total: ~305 kcal
Proteína: 8g | Carboidratos: 35g | Gorduras: 8g
                    """,
                    {Allergen.GLUTEN, Allergen.NUTS},
                    305, 8, 35, 8
                ),
                Meal(
                    "Pré-Treino 2",
                    """
- 2 bananas médias (210 kcal)
- 30g de granola sem açúcar (120 kcal)
Total: ~330 kcal
Proteína: 5g | Carboidratos: 65g | Gorduras: 6g
                    """,
                    {Allergen.NUTS},
                    330, 5, 65, 6
                ),
                Meal(
                    "Pré-Treino 3",
                    """
- 1 maçã média (95 kcal)
- 20g de amêndoas (140 kcal)
Total: ~235 kcal
Proteína: 6g | Carboidratos: 25g | Gorduras: 15g
                    """,
                    {Allergen.NUTS},
                    235, 6, 25, 15
                )
            ],
            
            "post_workout": [
                Meal(
                    "Pós-Treino 1",
                    """
- 1 scoop whey protein (120 kcal)
- 40g aveia em flocos (150 kcal)
- 1 banana (105 kcal)
- Canela a gosto
Total: ~375 kcal
Proteína: 30g | Carboidratos: 45g | Gorduras: 6g
                    """,
                    {Allergen.LACTOSE, Allergen.GLUTEN},
                    375, 30, 45, 6
                ),
                Meal(
                    "Pós-Treino 2",
                    """
- 2 ovos inteiros + 3 claras (245 kcal)
- 2 fatias de pão integral (160 kcal)
Total: ~405 kcal
Proteína: 32g | Carboidratos: 30g | Gorduras: 14g
                    """,
                    {Allergen.EGGS, Allergen.GLUTEN},
                    405, 32, 30, 14
                ),
                Meal(
                    "Pós-Treino 3",
                    """
- 200g de iogurte grego zero (120 kcal)
- 100g de morango (32 kcal)
- 10g de mel (30 kcal)
Total: ~182 kcal
Proteína: 20g | Carboidratos: 25g | Gorduras: 0g
                    """,
                    {Allergen.LACTOSE},
                    182, 20, 25, 0
                )
            ],
            
            "breakfast": [
                Meal(
                    "Café da Manhã 1",
                    """
- 3 ovos mexidos (210 kcal)
- 2 fatias de pão integral (160 kcal)
- 1 fatia de queijo branco (100 kcal)
Total: ~470 kcal
Proteína: 28g | Carboidratos: 30g | Gorduras: 22g
                    """,
                    {Allergen.EGGS, Allergen.LACTOSE, Allergen.GLUTEN},
                    470, 28, 30, 22
                ),
                Meal(
                    "Café da Manhã 2",
                    """
- 200g de iogurte grego zero (120 kcal)
- 15g de granola sem açúcar (60 kcal)
- 100g de morangos (32 kcal)
Total: ~212 kcal
Proteína: 18g | Carboidratos: 25g | Gorduras: 3g
                    """,
                    {Allergen.LACTOSE, Allergen.NUTS},
                    212, 18, 25, 3
                ),
                Meal(
                    "Café da Manhã 3",
                    """
- Panqueca proteica (1 scoop whey + 1 clara) (145 kcal)
- 100g de maçã (52 kcal)
- Canela a gosto
Total: ~197 kcal
Proteína: 28g | Carboidratos: 15g | Gorduras: 2g
                    """,
                    {Allergen.LACTOSE, Allergen.EGGS},
                    197, 28, 15, 2
                )
            ],
            
            "morning_snack": [
                Meal(
                    "Lanche da Manhã 1",
                    """
- 1 maçã média (95 kcal)
- 15g de amendoim (87 kcal)
Total: ~182 kcal
Proteína: 5g | Carboidratos: 22g | Gorduras: 8g
                    """,
                    {Allergen.NUTS},
                    182, 5, 22, 8
                ),
                Meal(
                    "Lanche da Manhã 2",
                    """
- 2 fatias de peito de peru (60 kcal)
- 1 fatia de pão integral (80 kcal)
- Alface e tomate à vontade
Total: ~140 kcal
Proteína: 12g | Carboidratos: 15g | Gorduras: 3g
                    """,
                    {Allergen.GLUTEN},
                    140, 12, 15, 3
                ),
                Meal(
                    "Lanche da Manhã 3",
                    """
- 150g de mamão papaya (60 kcal)
- 100g de iogurte natural desnatado (40 kcal)
Total: ~100 kcal
Proteína: 4g | Carboidratos: 18g | Gorduras: 0g
                    """,
                    {Allergen.LACTOSE},
                    100, 4, 18, 0
                )
            ],
            
            "lunch": [
                Meal(
                    "Almoço 1",
                    """
- 120g de peito de frango grelhado (198 kcal)
- 100g de brócolis cozido (55 kcal)
- 50g de arroz integral (60 kcal)
- 1 colher chá azeite (40 kcal)
Total: ~353 kcal
Proteína: 39g | Carboidratos: 20g | Gorduras: 12g
                    """,
                    set(),
                    353, 39, 20, 12
                ),
                Meal(
                    "Almoço 2",
                    """
- 150g de salmão grelhado (280 kcal)
- 100g de quinoa cozida (120 kcal)
- 50g de espinafre refogado (30 kcal)
Total: ~430 kcal
Proteína: 40g | Carboidratos: 30g | Gorduras: 20g
                    """,
                    {Allergen.SEAFOOD},
                    430, 40, 30, 20
                ),
                Meal(
                    "Almoço 3",
                    """
- 150g de carne bovina magra (250 kcal)
- 100g de batata doce assada (90 kcal)
- 50g de cenoura cozida (20 kcal)
Total: ~360 kcal
Proteína: 35g | Carboidratos: 30g | Gorduras: 10g
                    """,
                    set(),
                    360, 35, 30, 10
                )
            ],
            
            "afternoon_snack": [
                Meal(
                    "Lanche da Tarde 1",
                    """
- 1 scoop whey protein (120 kcal)
- 1 banana pequena (72 kcal)
Total: ~192 kcal
Proteína: 25g | Carboidratos: 20g | Gorduras: 1g
                    """,
                    {Allergen.LACTOSE},
                    192, 25, 20, 1
                ),
                Meal(
                    "Lanche da Tarde 2",
                    """
- 200g de iogurte grego zero (120 kcal)
- 100g de kiwi (61 kcal)
Total: ~181 kcal
Proteína: 15g | Carboidratos: 18g | Gorduras: 0g
                    """,
                    {Allergen.LACTOSE},
                    181, 15, 18, 0
                ),
                Meal(
                    "Lanche da Tarde 3",
                    """
- 30g de atum em água (42 kcal)
- 1 torrada integral (80 kcal)
- Tomate e alface à vontade
Total: ~122 kcal
Proteína: 12g | Carboidratos: 15g | Gorduras: 2g
                    """,
                    {Allergen.GLUTEN},
                    122, 12, 15, 2
                )
            ],
            
            "dinner": [
                Meal(
                    "Jantar 1",
                    """
- 150g de tilápia grelhada (171 kcal)
- 100g de abobrinha refogada (17 kcal)
- 40g de quinoa cozida (120 kcal)
Total: ~308 kcal
Proteína: 36g | Carboidratos: 22g | Gorduras: 8g
                    """,
                    {Allergen.SEAFOOD},
                    308, 36, 22, 8
                ),
                Meal(
                    "Jantar 2",
                    """
- 120g de peito de frango grelhado (198 kcal)
- Salada de folhas verdes (15 kcal)
- 100g de batata doce assada (90 kcal)
Total: ~303 kcal
Proteína: 35g | Carboidratos: 25g | Gorduras: 6g
                    """,
                    set(),
                    303, 35, 25, 6
                ),
                Meal(
                    "Jantar 3",
                    """
- Omelete de claras:
  - 4 claras (68 kcal)
  - Legumes variados (30 kcal)
- 50g de arroz integral (60 kcal)
Total: ~158 kcal
Proteína: 20g | Carboidratos: 15g | Gorduras: 2g
                    """,
                    {Allergen.EGGS},
                    158, 20, 15, 2
                )
            ],
            
            "supper": [
                Meal(
                    "Ceia 1",
                    """
- 1 scoop caseína (120 kcal)
- 100g de morango (32 kcal)
Total: ~152 kcal
Proteína: 24g | Carboidratos: 8g | Gorduras: 1g
                    """,
                    {Allergen.LACTOSE},
                    152, 24, 8, 1
                ),
                Meal(
                    "Ceia 2",
                    """
- 200g de iogurte grego zero (120 kcal)
- 5g de sementes de chia (25 kcal)
Total: ~145 kcal
Proteína: 15g | Carboidratos: 10g | Gorduras: 3g
                    """,
                    {Allergen.LACTOSE},
                    145, 15, 10, 3
                ),
                Meal(
                    "Ceia 3",
                    """
- Chá de camomila
- 2 claras cozidas (34 kcal)
- 50g de queijo cottage (60 kcal)
Total: ~94 kcal
Proteína: 16g | Carboidratos: 2g | Gorduras: 2g
                    """,
                    {Allergen.EGGS, Allergen.LACTOSE},
                    94, 16, 2, 2
                )
            ]
        } 