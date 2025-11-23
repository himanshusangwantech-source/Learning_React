const Weather = ({ temp }) => {
  return (
    <div>
      {temp < 15 ? (
        <h1>"It's cold outside!"</h1>
      ) : temp > 25 ? (
        <h1>"It's hot outside</h1>
      ) : (
        <h1>"It's nice outside!"</h1>
      )}
    </div>
  );
};

export default Weather;
