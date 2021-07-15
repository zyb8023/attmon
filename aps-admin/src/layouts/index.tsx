
type Props = {
  children: Element,
  name?: string
}

export default function Layouts (props: Props) {
const { children  } = props;
  return (
    <div>
      222222
      {children}
    </div>
  );
}
