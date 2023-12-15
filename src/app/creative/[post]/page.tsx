export default function Page({ params }: { params: { post: string } }) {
  return (
    <div>
      <h1>post: {params.post}</h1>
    </div>
  );
}
