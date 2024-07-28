import Image from "next/image";

function ServiceCard({ service }) {
  return (
    <div class="card card-compact bg-base-100 w-full shadow-xl p-2 border-2 border-blue-400 h-full">
      <figure>
        <Image
          src={service.imageUrl}
          width={20}
          height={20}
          alt="Picture of the author"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title m-auto">{service.heading}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
