import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <div className=' border-b border-neutral-300 dark:border-neutral-900 pb-10'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-10 text-center text-4xl text-neutral-900 dark:text-neutral-300'
        >
          Get in Touch
        </motion.h2>
        <div className='text-center tracking-tighter'>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-4 text-neutral-700 dark:text-neutral-400'
          >
            123 Street PMA Kakul Abbottabad
          </motion.p> 
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='my-4 text-neutral-700 dark:text-neutral-400'
          >
            +92 326 5528785
          </motion.p> 
          <a href="#" className='border-b border-neutral-900 dark:border-neutral-300 text-neutral-700 dark:text-neutral-400'>
            zakibhai237@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
