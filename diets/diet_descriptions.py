class DietDescription:
    def __init__(self, name, objective, calories, macronutrients, strategies, indication):
        self.name = name
        self.objective = objective
        self.calories = calories
        self.macronutrients = macronutrients
        self.strategies = strategies
        self.indication = indication

# Descrições das dietas
maintenance_diet = DietDescription(
    name="Dieta de Manutenção",
    objective="Manter o peso corporal atual.",
    calories="Consumo calórico igual ao gasto energético diário.",
    macronutrients="Balanceados de acordo com o estilo de vida e objetivo.",
    strategies="",
    indication="Ideal para quem está satisfeito com o peso atual ou deseja evitar oscilações."
)

cutting_diet = DietDescription(
    name="Dieta de Cutting",
    objective="Reduzir gordura corporal, preservando o máximo de massa magra.",
    calories="Consumo calórico abaixo do gasto energético diário (déficit calórico).",
    macronutrients="Alta proteína para preservar músculos, moderados carboidratos e gorduras.",
    strategies="Ciclo de carboidratos, Jejum intermitente.",
    indication="Preparação para competições, definição muscular ou perda de gordura."
)

bulking_diet = DietDescription(
    name="Dieta de Bulking",
    objective="Ganhar massa muscular e força.",
    calories="Consumo calórico acima do gasto energético diário (superávit calórico).",
    macronutrients="Alta proteína para construção muscular, carboidratos elevados para energia, gorduras moderadas.",
    strategies="Bulking Limpo, Bulking Sujo.",
    indication="Períodos de hipertrofia ou aumento de desempenho."
)

# Exemplos de outras dietas
keto_diet = DietDescription(
    name="Dieta Cetogênica (Keto)",
    objective="Promover a queima de gordura através da cetose.",
    calories="",
    macronutrients="Altas gorduras (~70%), proteínas moderadas (~25%), e carboidratos muito baixos (~5%).",
    strategies="",
    indication="Perda de peso, controle glicêmico."
)

mediterranean_diet = DietDescription(
    name="Dieta Mediterrânea",
    objective="Saúde cardiovascular e bem-estar geral.",
    calories="",
    macronutrients="",
    strategies="",
    indication="Dieta equilibrada para longevidade e prevenção de doenças."
)

vegetarian_diet = DietDescription(
    name="Dieta Vegetariana/Vegana",
    objective="Exclusão de produtos de origem animal (vegana) ou apenas carne (vegetariana).",
    calories="",
    macronutrients="",
    strategies="",
    indication="Ética, ambiental ou saúde."
)

paleo_diet = DietDescription(
    name="Dieta Paleolítica",
    objective="Alimentar-se como na era paleolítica, evitando alimentos processados.",
    calories="",
    macronutrients="",
    strategies="",
    indication="Reduzir inflamação e melhorar a digestão."
)

intermittent_fasting = DietDescription(
    name="Jejum Intermitente",
    objective="Alternar períodos de alimentação e jejum para controlar peso e melhorar sensibilidade à insulina.",
    calories="",
    macronutrients="",
    strategies="16:8 (jejum de 16h, janela de 8h para alimentação) ou 5:2 (5 dias normais, 2 dias com restrição calórica).",
    indication="Controle de peso e simplicidade."
) 