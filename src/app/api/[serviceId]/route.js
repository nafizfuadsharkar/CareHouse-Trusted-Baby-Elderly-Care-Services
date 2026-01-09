import { getSingleService } from "@/Services/services.service";

export async function GET(req, { params }) {
  const service = await getSingleService(params.serviceId);
  if (!service) {
    return new Response(JSON.stringify({ error: "Service not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(service), { status: 200 });
}
