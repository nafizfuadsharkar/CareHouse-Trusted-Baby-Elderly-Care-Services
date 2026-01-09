import Link from "next/link";
import { Star } from "lucide-react";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, description, pricePerHour, rating, image } =
    service;

  return (
    <div className="glass-card overflow-hidden rounded-3xl shadow-xl group transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {serviceName}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-4">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {rating}
          </span>
        </div>

        {/* Footer: Price + Button */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-lg font-bold text-emerald-600">
            ৳{pricePerHour}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-300">
              {" "}
              / hour
            </span>
          </p>

          <Link
            href={`/services/${_id}`}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
