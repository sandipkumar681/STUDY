import { comment } from "../comment";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const particularComment = comment.find((p) => p.id === id);

    if (!particularComment) {
      return new Response(
        JSON.stringify({ message: `Can not find comment ${id}` }),
        { status: 404 }
      );
    }

    return Response.json(particularComment);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { text }: { text: string } = await request.json();
    console.log(text);

    const particularComment = comment.find((p) => p.id === id);

    if (!particularComment) {
      return new Response(
        JSON.stringify({ message: `Can not find comment ${id}` }),
        { status: 404 }
      );
    }

    const updatedComment = { ...particularComment, text: text };

    comment.map((p, index) =>
      p.id === id ? (comment[index] = updatedComment) : p
    );

    return Response.json(comment);
  } catch (error) {
    console.log(error);
  }
}
