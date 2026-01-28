import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Address */}
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-accent-100 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent-500" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-heading-md text-primary-900 mb-1">
            Visit Us
          </h3>
          <p className="font-body text-body text-primary-600">
            1717 US-281<br />
            Blanco, TX 78606
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-accent-100 flex items-center justify-center">
            <Phone className="w-5 h-5 text-accent-500" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-heading-md text-primary-900 mb-1">
            Call Us
          </h3>
          <a
            href="tel:+15125551234"
            className="font-body text-body text-primary-600 hover:text-accent-500 transition-colors"
          >
            (512) 555-1234
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-accent-100 flex items-center justify-center">
            <Mail className="w-5 h-5 text-accent-500" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-heading-md text-primary-900 mb-1">
            Email Us
          </h3>
          <a
            href="mailto:info@whiterockmillwork.com"
            className="font-body text-body text-primary-600 hover:text-accent-500 transition-colors"
          >
            info@whiterockmillwork.com
          </a>
        </div>
      </div>

      {/* Hours */}
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-accent-100 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent-500" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-heading-md text-primary-900 mb-1">
            Hours
          </h3>
          <p className="font-body text-body text-primary-600">
            Monday - Friday: 8am - 5pm<br />
            Saturday: By Appointment<br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-8">
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
          <div className="text-center p-4">
            <MapPin className="w-8 h-8 mx-auto text-neutral-400 mb-2" />
            <span className="font-body text-small text-neutral-500">
              Google Map Embed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
