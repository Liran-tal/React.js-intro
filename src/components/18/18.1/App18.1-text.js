import React from "react";
import ReadMore from "./ReadMore";

function App() {
	return (
    <div >
			<ReadMore
				text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus, odio sed mattis blandit, metus turpis venenatis orci, vel lobortis diam sem ut leo. Nunc rutrum leo vitae augue ultricies, nec pellentesque est iaculis. In non blandit neque. Maecenas vitae leo vitae nisi vehicula egestas quis sodales risus. Pellentesque vel."}
				maxLength={98}
			/>
    </div>
  );
}

export default App;