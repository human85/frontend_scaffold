import { Loader } from 'lucide-react';

export const Loading = ({ loading }: { loading?: boolean }) => {
  if (!loading) return null;

  return <Loader color="#fff" className="mx-auto mt-7 animate-spin" />;
};
