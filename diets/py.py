from fpdf import FPDF, XPos, YPos
from meal_plans import Allergen
from diets.maintenance_diet import MaintenanceDiet
from diets.bulking_diet import BulkingDiet
from diets.cutting_diet import CuttingDiet
from diet_descriptions import maintenance_diet, cutting_diet, bulking_diet

class PDF(FPDF):
    def header(self):
        self.set_font('helvetica', 'B', 15)
        self.cell(0, 10, 'Plano Alimentar Personalizado', new_x=XPos.LMARGIN, new_y=YPos.NEXT, align='C')
        self.ln(10)

    def chapter_title(self, title):
        self.set_font('helvetica', 'B', 12)
        self.cell(0, 10, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT, align='L')
        self.ln(4)

    def chapter_body(self, content):
        self.set_font('helvetica', '', 11)
        self.multi_cell(0, 5, content)
        self.ln(10)

def get_user_preferences():
    """Obtém as preferências do usuário"""
    print("\n=== CONFIGURAÇÃO DO PLANO ALIMENTAR ===\n")
    
    # Escolha do objetivo
    print("Escolha seu objetivo:")
    print("1. Manutenção do Shape")
    print("2. Ganho de Massa Magra")
    print("3. Emagrecimento")
    
    goals = {
        "1": "maintenance",
        "2": "bulking",
        "3": "cutting"
    }
    
    while True:
        goal = input("Digite o número do seu objetivo (1-3): ")
        if goal in goals:
            break
        print("Opção inválida!")
    
    # Número de refeições
    while True:
        try:
            meals = int(input("\nQuantas refeições por dia deseja? (5-12): "))
            if 5 <= meals <= 12:
                break
            print("O número de refeições deve estar entre 5 e 12!")
        except ValueError:
            print("Por favor, digite um número válido!")
    
    # Alergias
    print("\nVerificação de alergias:")
    allergens = []
    allergies = {
        "1": ("Lactose", Allergen.LACTOSE),
        "2": ("Glúten", Allergen.GLUTEN),
        "3": ("Castanhas/Amendoim", Allergen.NUTS),
        "4": ("Ovos", Allergen.EGGS),
        "5": ("Frutos do Mar", Allergen.SEAFOOD)
    }
    
    for key, (name, allergen) in allergies.items():
        response = input(f"Você tem alergia a {name}? (s/n): ").lower()
        if response.startswith('s'):
            allergens.append(allergen)
    
    return goals[goal], meals, allergens

def create_meal_plan_pdf():
    # Obtém preferências do usuário
    goal, meals_per_day, allergens = get_user_preferences()
    
    # Cria o plano alimentar
    diet_classes = {
        "maintenance": MaintenanceDiet,
        "bulking": BulkingDiet,
        "cutting": CuttingDiet
    }
    diet_descriptions = {
        "maintenance": maintenance_diet,
        "bulking": bulking_diet,
        "cutting": cutting_diet
    }
    
    diet = diet_classes[goal](meals_per_day)
    diet.set_allergens(allergens)
    
    # Cria o PDF
    pdf = PDF()
    pdf.add_page()
    
    # Adiciona informações gerais
    description = diet_descriptions[goal]
    pdf.set_font('helvetica', 'B', 12)
    pdf.cell(0, 10, f"Objetivo: {description.name}", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align='L')
    pdf.multi_cell(0, 5, f"Descrição: {description.objective}")
    pdf.multi_cell(0, 5, f"Calorias: {description.calories}")
    pdf.multi_cell(0, 5, f"Macronutrientes: {description.macronutrients}")
    pdf.multi_cell(0, 5, f"Estratégias: {description.strategies}")
    pdf.multi_cell(0, 5, f"Indicação: {description.indication}")
    pdf.ln(10)
    
    if allergens:
        pdf.cell(0, 10, "Alergias consideradas: " + ", ".join(allergens), new_x=XPos.LMARGIN, new_y=YPos.NEXT, align='L')
    
    # Adiciona as refeições
    meal_times = diet.calculate_meal_times()
    for meal, time in zip(diet.meals, meal_times):
        pdf.chapter_title(f"{meal.title} ({time})")
        pdf.chapter_body(meal.content)
    
    # Salva o PDF
    pdf_file_path = f"./Plano_Alimentar_{diet.goal}_{diet.calories}kcal.pdf"
    pdf.output(pdf_file_path)
    return pdf_file_path

if __name__ == "__main__":
    create_meal_plan_pdf()
