function ChoixVehicule() {
  return (
    <>
      <img
        class="w-full h-32 object-cover object-center"
        src="../src/assets/Images/fresque.jpg"
        alt="foule derrière un carrosse avec chevaux"
      />
      <div>
        <select
            // onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="All">Toutes les scènes</option>
          <option value="Flying High">Flying High</option>
          <option value="Sonic Sphere">Sonic Sphere</option>
          <option value="Electronic Dawn">Electronic Dawn</option>
          <option value="Sunset Stage">Sunset Stage</option>
        </select>
      </div>
    </>
  );
}

export default ChoixVehicule;
