import { Turnstile } from '@marsidev/react-turnstile';

export default function Widget({ onChange }: { onChange: Function }) {
  return (
    <Turnstile
      style={{ display: 'none' }}
      siteKey={'your site key'}
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
