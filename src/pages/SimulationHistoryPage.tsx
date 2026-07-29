import { Card } from "../components/features/History/HistoryCard";
import { PageHero } from "../components/shared/PageHero";

export function SimulationHistoryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de Simulações"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      <div>
        <Card
          goalName="Meta de Compras"
          goalDate="01/01/2023"
          goalAmount="R$ 1.000,00"
          goalDeadline="31/12/2023"
          monthlySavings="R$ 83,33"
        />

        <Card
          goalName="Meta de compra no Carrefour"
          goalDate="01/01/2023"
          goalAmount="R$ 100.000.000,00"
          goalDeadline="31/12/2023"
          monthlySavings="R$ 83,33"
        />
      </div>
    </main>
  );
}
