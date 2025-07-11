interface ButtonProps {
  src: string;
  title: string;
}

const Button = ({ src, title }: ButtonProps) => (
  <p>
    <a target="_self" rel="noopener" href={src}>
      <i>{title}</i>
    </a>
  </p>
);

export default Button;
