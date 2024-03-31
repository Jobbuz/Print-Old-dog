import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Image
        src={"/contactpic1.png"}
        alt={"contactpic"}
        width={1520}
        height={580}
      ></Image>
      <div className="flex flex-col p-20">
        <div className="flex flex-row pb-10 w-full">
          <div className="pr-16 w-1/2">
            <h1 className="pb-4 font-bold text-2xl">Phone</h1>
            <p className="font-medium text-base">
              If you like to hear a voice at the other end, we're there for you
              with everything you need.
            </p>
            <p className="font-medium text-base">Call 000-000-0000</p>
            <br></br>
            <p className="font-medium text-base">
              Wherever you're calling from, standard rates apply to phone
              charges.
            </p>
            <p className="font-medium text-base">Monday - Sunday</p>
            <p className="font-medium text-base">10:00 - 22:00</p>
          </div>
          <div className="w-1/2">
            <h1 className="pb-4 font-bold text-2xl">Social media</h1>
            <p className="font-medium text-base">
              You can follow us on social media, leave comments, see what other
              people have to say.
            </p>
            <div className="flex flex-row justify-center gap-x-10 pt-6">
              <div className="bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266] rounded-full w-10 h-10"></div>
              <div className="bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266] rounded-full w-10 h-10"></div>
              <div className="bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266] rounded-full w-10 h-10"></div>
              <div className="bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266] rounded-full w-10 h-10"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pb-10">
          <div className="pr-16 w-1/2">
            <h1 className="pb-4 font-bold text-2xl">Email</h1>
            <p className="font-medium text-base">
              Because you might need help anytime, day-or-night. So email and
              we'll get back to you as soon as possible.
            </p>
            <p className="font-medium text-base underline">
              sinnoClubeiei@gmail.com
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="pb-4 font-bold text-2xl">Feedback center</h1>
            <p className="font-medium text-base">
              Tell us about your experience in the store or with our website,
              mobile app, any one of our services or with the customer service.
              We are always looking to improve and welcome your feedback.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="pb-4 font-bold text-2xl">Map</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7740.378133149028!2d100.6094573759493!3d14.066010125878506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f8adde458f3%3A0x536c67b40b52eabe!2sSirindhorn%20International%20Institute%20of%20Technology%2C%20Rangsit%20Campus%20(SIIT-RS)!5e0!3m2!1sen!2sth!4v1711866127548!5m2!1sen!2sth"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-1/2">
            <h1 className="pb-4 font-bold text-2xl">FAQ</h1>
            <p className="font-medium text-base">
              The fastest way to get answers is to read our frequently asked
              questions (FAQ)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
