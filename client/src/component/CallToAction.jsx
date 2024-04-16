import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Homzy?</h2>
        <p className="text-gray-500 my-2">Checkout these resources on Github</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://github.com/Ankit-Dhattarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Homzy
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://uploads-ssl.webflow.com/6447e3efa0bd63d974206f14/644bc3f012ed4b2a5a089f09_hero%20image3.png" />
      </div>
    </div>
  );
}
