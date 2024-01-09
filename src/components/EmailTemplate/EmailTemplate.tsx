interface EmailTemplateProps {
  name: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  content,
}) => (
  <div>
    <h1>{name} wants to get in touch with you.</h1>
    <h4>email: {email}</h4>
    <p>{content}</p>
  </div>
);
