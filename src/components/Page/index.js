import PropTypes from 'prop-types';

function Page({ children }) {
  return (
    <main className="page">
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
