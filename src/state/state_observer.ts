type ObservableProps = "player";

type Observable = {
  [prop in ObservableProps]: (() => void)[];
};

export class StateObserver {
  private _observable: Observable = {
    player: [],
  };

  onStateUpdate(prop: ObservableProps) {
    const propReactions = this._observable[prop];
    for (const reaction of propReactions) {
      reaction();
    }
  }

  addStateListener(prop: ObservableProps, callback: () => void) {
    this._observable[prop].push(callback);
  }
}
