function Footer() {
  return (
    <div>
      <div className="bg-blue w-full h-20 flex justify-center items-center -mt-10">
        <p className="font-mono text-almostWhite">
          {" "}
          2023 © Created by Sleepy Dev Squad{" "}
        </p>
        <div>
          <img
            src="../src/assets/Images/logo-sleepy-dev-squad.png"
            alt="Logo for desktop"
            className="h-20 p-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
