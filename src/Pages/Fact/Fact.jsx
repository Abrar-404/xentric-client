// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import '../../Components/Styles/fact.css';

// const Fact = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <motion.div
//         layout
//         data-isOpen={isOpen}
//         initial={{ borderRadius: 50 }}
//         className="parent"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <motion.div layout className="child" />
//         {/* <h1>HG</h1> */}
//       </motion.div>
//     </div>
//   );
// };

// export default Fact;

import '../../Components/Styles/fact.css';
import { useState } from 'react';
import { initialTabs as tabs } from '../../Pages/Fact/Ingredient';
import { motion, AnimatePresence } from 'framer-motion';

export default function Fact() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav>
        <div className='up'>
          {tabs.map(item => (
            <ol
              key={item.label}
              className={item === selectedTab ? 'selected' : ''}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </ol>
          ))}
        </div>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : '😋'}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
