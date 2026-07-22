require("./config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./user");
const app = express();
app.use(express.json());
app.use(cors());

// ..........Register/signup1..........................

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

// .........................Login.......................

app.post("/login", async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.send({ result: "Email or Password missing" });
  }

  const user = await User.findOne({ Email: Email, Password: Password });

  if (user) {
    res.send({ result: "user found", user });
  } else {
    res.send({ result: "user not found" });
  }
});

// ....................Update...........................................

app.put("/update", async (req, res) => {
  const { Email, NewPassword } = req.body;

  if (!Email || !NewPassword) {
    return res.send({ result: "Email or Password missing" });
  }

  const user = await User.findOne({ Email: Email});
  if (user) {
    const user1 = await User.updateOne(
      { Email: Email },
      { $set: { Password: NewPassword } },
    );
    res.send({ result: "data updated", user1 });
  } else {
    res.send({ result: "user not found" });
  }
});

// .............Delete.........................

app.delete("/delete", async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.send({ result: "Email or Password missing" });
  }

  const user = await User.findOne({ Email: Email,Password:Password});
  if (user) {
    const user1 = await User.deleteOne(
      { Email: Email,Password:Password },
    );
    res.send({ result: "data deleted", user1 });
  } else {
    res.send({ result: "user not found" });
  }
});

// ...........addition............................

app.post("/Add", (req, res) => {
  const { fno, sno } = req.body;
  const c = Number(fno) + Number(sno);
  res.json({ c });
});

// factorial
app.post("/fact", (req, res) => {
  const { no } = req.body;
  let fe = 1;
  for (let i = 1; i <= no; i++) {
    fe = fe * i;
  }

  res.json({ fe });
});

// even/odd
app.post("/eo", (req, res) => {
  const { no } = req.body;
  if (no % 2 == 0) {
    res.json({ result: "even" });
  } else {
    res.json({ result: "odd" });
  }
});

// Armstrong no
app.post("/ar", (req, res) => {
  let { no } = req.body;
  let sum = 0;
  let temp = no;
  while (no > 0) {
    r = no % 10;
    sum = sum + r * r * r;
    no = parseInt(no / 10);
  }
  if (sum == temp) {
    res.json({ result: "armstrong" });
  } else {
    res.json({ result: "not armstrong" });
  }
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
