interface Props {
  color: string;
  size: number;
}
const Logo = ({ color, size }: Props) => {
  return (
    <svg width={size} fill={color} x="0px" y="0px" viewBox="0 0 100 125">
      <g>
        <path d="M98.287,18.55C96.986,5.553,83.451,1.892,82.873,1.742l-5.047-1.31l3.217,4.107c1.882,2.4,6.469,9.662,5.123,14.362   c-0.527,1.851-1.948,3.173-4.292,4.026c-0.035,0.01-3.515,1.151-10.309,2.284l-0.493,0.088L70.7,25.619   c-0.014,0.011-1.345,1.135-2.861,1.135c-0.823,0-1.566-0.343-2.3-1.076c-0.289-0.276-7.164-6.757-16.492-6.757   c-5.535,0-10.717,2.272-15.399,6.756c-0.733,0.702-1.497,1.042-2.334,1.042c-1.516,0-2.816-1.092-2.82-1.096l-0.377-0.33   l-0.495-0.083c-6.78-1.13-10.26-2.268-10.262-2.268c-2.39-0.869-3.81-2.19-4.339-4.042c-1.345-4.7,3.243-11.962,5.124-14.362   l3.218-4.108l-5.05,1.311C15.737,1.892,2.2,5.553,0.9,18.55c-1.215,12.16,12.683,19.607,21.076,22.965l1.082,0.416l0.821-0.808   c0.25-0.245,0.944-0.751,1.501-0.751c0.62,0,1.148,0.799,1.483,1.47c1.624,3.247-1.644,5.754-1.995,6.024L24,48.395v0.882   c0,0.211,0.206,5.26,3.94,11.483l0.486,0.664l0.797,0.155c0.048,0.011,4.827,1.035,5.711,4.576l1.186,4.7l2.489,5.061   c0.951,1.903,2.166,14.325,2.166,15.662c0,1.748,1.489,6.076,5.908,7.549l2.545,0.848L49,97.305   c-0.739-8.655-1.983-31.714,0.593-39.21c2.576,7.495,1.332,30.554,0.593,39.21l-0.229,2.671l2.544-0.848   c4.419-1.473,5.905-5.801,5.905-7.549c0-1.337,1.215-13.759,2.165-15.662l2.35-4.701l1.309-5.06   c0.885-3.541,5.645-4.565,5.686-4.575l0.766-0.151l-0.026-0.669C74.387,54.537,74,49.489,74,49.277v-0.882l-0.279-0.53   c-0.143-0.108-3.286-2.68-1.612-6.024c0.335-0.671,0.971-1.47,1.59-1.47c0.558,0,1.305,0.506,1.545,0.741l0.85,0.838l1.104-0.436   C85.589,38.157,99.503,30.71,98.287,18.55z" />
      </g>
    </svg>
  );
};

export default Logo;