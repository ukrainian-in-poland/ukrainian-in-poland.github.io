const wrappedHashRouter = {
  get: () => {
    return window.location.hash
  }
}

export default wrappedHashRouter;