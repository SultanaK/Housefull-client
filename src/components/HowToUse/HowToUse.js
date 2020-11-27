import React from 'react';
import './HowToUse.css';

export default function HowToUser() {
	return (
<div>
		<div className="help">
                <h1>How to get started</h1>
                <p>Trying to post a Item?</p>
                <ol>
                    
                    Click the 'ADD NEW ITEM' button<br /> 
                    
						
							<li>enter a title for your item </li><br />
							<li>enter a title for your description</li><br />
							<li>enter price </li><br />
							<li>enter a image link to update image </li><br />
							<li>enter email address for more information</li><br />
							<li>enter price </li><br />
							<li>select a category from category dropdown</li>		<br/ >		
						
                    <li>DONE! Easy as that. Now you can view your Item on the Item page or on the category .</li>
                </ol>
                <p>Trying to Search any Item?</p>
                <ol>
                    <li>Type any item of yoyr choice</li>
                    <li>Click on the 'Submit' button  to find appropreate item</li>
                    <li>Click on the "Item" to see details</li>
                    
                </ol>
                <p>Trying to delete a posting?</p>
                <ol>
                    <li>Go to the Item by searching or by category</li>
                    <li>Click on the Item you want to delete</li>
                    <li>Tap on delete and it will be removed</li>
                </ol>
            </div>
			<footer>&#169; HouseWill {new Date().getFullYear()}</footer>
		</div>
	);
}
