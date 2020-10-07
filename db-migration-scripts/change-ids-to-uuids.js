print('start');

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

cursor = db.games.find();
while (cursor.hasNext()) {
  const game = cursor.next();

  const oldId = game._id;

  game._id = uuidv4();

  db.games.insert(game);

  db.games.remove({ _id: oldId });
}

print('end');
