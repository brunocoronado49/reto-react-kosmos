import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import { getFields } from "../../API/api";
import { variants } from '../variants/variants';

const List = () => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    const snapshot = await getFields();
    const docs = [];

    snapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setFields(docs);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, [setFields]);

  return (
    <div className="content">
      {loading ? (
        <Loading />
      ) : fields.length == 0 ? (
        <motion.h2
          className="loading"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          No Users
        </motion.h2>
      ) : (
        fields.map( field => (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            key={field.id}
          >
            <Card field={field} />
          </motion.div>
        ))
      )}
    </div>
  );
};

export default List;
