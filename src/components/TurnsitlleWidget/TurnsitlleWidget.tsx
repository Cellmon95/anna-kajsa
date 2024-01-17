import { Turnstile } from '@marsidev/react-turnstile';

export default function Widget({ onChange }: { onChange: Function }) {
  return (
    <Turnstile
      style={{ display: 'none' }}
      siteKey={'0x4AAAAAAAQLwcWoTaWbS5dR'}
      onError={() => {
        onChange('error');
      }}
      onExpire={() => {
        onChange('expired');
      }}
      onSuccess={() => {
        onChange('success');
      }}
    />
  );
}
