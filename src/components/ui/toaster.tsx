import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return <Sonner richColors position="top-center" className="font-montserrat-medium" {...props} />;
};

export { Toaster };
