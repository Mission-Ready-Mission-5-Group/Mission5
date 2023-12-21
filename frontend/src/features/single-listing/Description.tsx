type Props = {
  text: string;
};
export const Description = ({ text }: Props) => {
  return (
    <div>
      <p className="font-bold text-2xl">Description</p>
      <p>{text}</p>
    </div>
  );
};
