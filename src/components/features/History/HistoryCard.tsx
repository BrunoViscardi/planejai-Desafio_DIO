import { Goal, Trash2, ExternalLink } from "lucide-react";
import { Divider } from "../../shared/Divider";
import { Button } from "../../shared/Button";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  goalName: string;
  createdAt: string;
  goalAmount: string;
  goalDeadline: string;
  monthlySavings: string;
  onDelete: (id: string) => void;
}

export function Card({
  id,
  goalName,
  createdAt,
  goalAmount,
  goalDeadline,
  monthlySavings,
  onDelete,
}: CardProps) {
  const styleClasses = {
    goalName: "text-foreground text-base leading-relaxed font-semibold",
    createdAt: "text-muted-foreground leading-relaxed text-sm",
    label: "text-muted-foreground text-xs leading-relaxed font-semibold",
    value: "text-foreground text-base leading-relaxed font-semibold",
  };
  const navigate = useNavigate();

  return (
    <div
      className={
        "bg-card mb-6 gap-2 flex w-full flex-col rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:flex-row lg:items-center lg:justify-between"
      }
    >
      <div className="flex h-10 w-10  shrink-0 items-center justify-center rounded-[10.67px] bg-[#ECE5F8]">
        <Goal size={28} className="text-primary" />
      </div>

      <div className="w-full lg:w-[210px]">
        <span className={styleClasses.goalName}>{goalName}</span>
        <p className={styleClasses.createdAt}>{createdAt}</p>
      </div>

      <div className="w-full lg:w-[150px]">
        <span className={styleClasses.label}>Custo da Meta</span>
        <p className={styleClasses.value}>{goalAmount}</p>
      </div>

      <div className="w-[150px]">
        <span className={styleClasses.label}>Prazo</span>
        <p className={styleClasses.value}>{goalDeadline}</p>
      </div>

      <div className="w-full lg:w-[150px]">
        <span className={styleClasses.label}>Economia Mensal</span>
        <p className={styleClasses.value}>{monthlySavings}</p>
      </div>

      {/* Apenas desktop */}
      <Divider orientation="vertical" className="hidden lg:block" />

      {/* Apenas mobile */}
      <Divider orientation="horizontal" className="block lg:hidden" />

      <div className="flex justify-evenly gap-6">
        <Button
          type="button"
          icon={Trash2}
          className="text-red-500"
          variant="ghost"
          onClick={() => onDelete(id)}
        ></Button>

        <Divider orientation="vertical" className="lg:hidden" />

        <Button
          type="button"
          onClick={() => navigate(`/resultado/${id}`)}
          icon={ExternalLink}
          variant="secondary"
        >
          Ver detalhes
        </Button>
      </div>
    </div>
  );
}
