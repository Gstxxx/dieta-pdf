from meal_plans import DietPlan, Meal, Allergen

def create_meal_options():
    """
    Cria todas as opções de refeições disponíveis no sistema
    Retorna um dicionário com as refeições organizadas por tipo
    """
    # Código original do _create_meal_options aqui
    pass

def get_suitable_meal(all_meals, meal_type, allergens):
    """
    Retorna uma refeição adequada considerando as alergias
    
    Args:
        all_meals (dict): Dicionário com todas as refeições disponíveis
        meal_type (str): Tipo de refeição desejada
        allergens (set): Conjunto de alergias do usuário
    """
    suitable_meals = [
        meal for meal in all_meals[meal_type]
        if not (meal.allergens & allergens)
    ]
    return suitable_meals[0] if suitable_meals else None

def setup_meals(meals_per_day, all_meals, allergens):
    """
    Configura as refeições baseado no número de refeições por dia
    e nas alergias do usuário
    
    Args:
        meals_per_day (int): Número de refeições por dia
        all_meals (dict): Dicionário com todas as refeições disponíveis
        allergens (set): Conjunto de alergias do usuário
    """
    meals = []
    
    # Sempre inclui pré e pós treino
    pre_workout = get_suitable_meal(all_meals, "pre_workout", allergens)
    post_workout = get_suitable_meal(all_meals, "post_workout", allergens)
    
    if pre_workout and post_workout:
        meals.extend([pre_workout, post_workout])
    
    # Distribui as refeições restantes
    remaining_meals = meals_per_day - 2
    meal_types = ["breakfast", "morning_snack", "lunch", 
                 "afternoon_snack", "dinner", "supper"]
    
    for i in range(remaining_meals):
        meal_type = meal_types[i % len(meal_types)]
        meal = get_suitable_meal(all_meals, meal_type, allergens)
        if meal:
            meals.append(meal)
            
    return meals 