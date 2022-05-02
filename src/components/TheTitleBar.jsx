import PropTypes from 'prop-types';

function TheTitleBar({content}) {
  return (
    <div className="relative p-8 z-[1]">
      <h1
        className="absolute inset-0 py-4 w-full border-2 border-black bg-white text-center text-xl font-bold after:inset-0 after:w-full after:h-full after:translate-x-[-7px] after:translate-y-[7px] after:content-[''] after:absolute after:bg-white after:border-2 after:border-black after:z-[-1]"
      >
        {content}
      </h1>
    </div>
  )
}

TheTitleBar.propTypes = {
  content: PropTypes.node.isRequired,
};


export default TheTitleBar
