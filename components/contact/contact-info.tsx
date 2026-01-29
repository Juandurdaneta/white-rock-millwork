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
            href="tel:+18309535339"
            className="font-body text-body text-primary-600 hover:text-accent-500 transition-colors"
          >
            (830) 953-5339
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
            href="mailto:admin@whiterockmillwork.com"
            className="font-body text-body text-primary-600 hover:text-accent-500 transition-colors"
          >
            admin@whiterockmillwork.com
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
            Monday - Friday: 8:00 AM - 4:00 PM
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <div className="aspect-[4/3] w-full">
          <iframe
            src="https://www.google.com/maps?q=1717+US-281,+Blanco,+TX+78606&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Whiterock Millwork Location"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
