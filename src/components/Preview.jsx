function Preview({ children }) {
  return (
    <>
      { children }
    </>
  )
};

export default connect(mapStateToProps, null)(Preview)


