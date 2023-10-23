import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";

const Dummy = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dummycard">
            <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                style={{ background: "white", borderRadius: "1rem" }}
                transition={{ layout: { duration: 1, type: "spring" } }}
            >
                <motion.h2 layout="position" style={{ fontSize: "20px" }}>
                    Framer Motion 🚀
                </motion.h2>
                {isOpen && (
                    <motion.div
                        className="expand"
                        style={{ maxWidth: "500px" }}
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Dignissimos, ullam quasi. Magnam animi ipsum
                            libero dicta molestias ullam! Modi, laboriosam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nam accusamus ipsa eaque iusto distinctio
                            cupiditate doloremque quisquam cum dicta dolores
                            suscipit dolor voluptatem facere, voluptate velit
                            corrupti eius eos consequatur nulla ea. Ex at
                            possimus dicta natus earum, veniam deleniti. Harum,
                            assumenda fugiat temporibus hic error ut nemo ullam
                            aliquid.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Dummy;
