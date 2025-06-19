export default function Footer() {
  return (
    <div className="w-full flex justify-around pb-16">
        <div className="w-1/3 text-white h-56 flex flex-col justify-between">
        <div>
            <h1 className="text-3xl mb-3">MNTN</h1>
            <p className="w-2/5">Get out there & discover your next slope, mountain & destination!</p>
        </div>
        <p className="opacity-40">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
        </div>

        <div className="text-white h-56">
            <p className="mb-3 text-[#FBD784] text-xl">More on The Blog</p>
            <p className="mb-3 cursor-pointer">About MNTN</p>
            <p className="mb-3 cursor-pointer">Contributors & Writers</p>
            <p className="mb-3 cursor-pointer">Write For Us</p>
            <p className="mb-3 cursor-pointer">Contact Us</p>
            <p className="mb-3 cursor-pointer">Privacy Policy</p>
        </div>
        <div className="text-white h-56">
            <p className="mb-3 text-[#FBD784] text-xl">More on MNTN</p>
            <p className="mb-3 cursor-pointer">The Team</p>
            <p className="mb-3 cursor-pointer">Jobs</p>
            <p className="mb-3 cursor-pointer">Press</p>
        </div>
    </div>
  );
}
