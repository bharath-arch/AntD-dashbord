const withPremium = (WrappedComponent: React.ComponentType) => {
  return function (props: any) {
    console.log(props);
    return (
      <>
        {props.premium === true ? (
          <>
            <div
              className=""
              style={{ display: "flex", border: "1px solid black" }}
            >
              <p>Premium</p>
              <WrappedComponent {...props} />
            </div>
          </>
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
};

export default withPremium;
