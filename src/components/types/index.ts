import { StaticImageData } from "next/image";

export interface DashboardCardProps {
  MainIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  SecondaryIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  count: number | string;
  percentage?: number | string;
  border?: string;
  padding?: string;
  percentageColor?: string;
  images?: StaticImageData[];
}

export interface InputFieldProps {
  className?: string;
}

export interface CustomerListProps {
  children: React.ReactNode;
}
