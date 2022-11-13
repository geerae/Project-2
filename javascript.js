//------------------------------------------------------------------------------------------------------
//Bond: the cost for a courtesy phone (and charger) only if the customer is a “consumer” type.
//      If customer is "business", no bond is required.
//------------------------------------------------------------------------------------------------------

//Assume there is a list of courtesy items as below:
let courtesyList = [{item: 'iPhone', bond: 275},
					{item: 'otherPhone', bond: 100},
					{item: 'charger', bond: 30}
				   ];
				   
//We will use "appState" object to track the form change when users interact with the app			   
let appState = {customerType: 'consumer',
				courtesyPhone: {item: 'none', bond: 0 },//Allow to borrow ONLY 1 phone
				courtesyCharger: {item: 'none', bond: 0},//Allow to borrow ONLY 1 charger
				cost: {bond: 0 , serviceFee: 85.00, totalFee: 0, gst: 0, totalAndGstFee: 0},
				business: {totalFee: 85}
			  };	

//------------------------------------------------------------------------------------------------------
//Service Fee: $85 if the customer's phone is "not warranty", else $0.00
//------------------------------------------------------------------------------------------------------
$('#warranty').change(function() {
	if (this.checked) {
		$('#serviceFee').val('0.00');
	} else {
		$('#serviceFee').val('85.00');
	}
		//Update total appStates
		appState.cost.totalFee = appState.cost.bond + appState.cost.serviceFee;
		appState.cost.gst = appState.cost.totalFee*0.15;
		appState.cost.totalAndGstFee = appState.cost.totalFee + appState.cost.gst;
		//Update total elements
		$("#totalFee").val(appState.cost.totalFee);
		$("#gst").val(appState.cost.gst);	
		$("#totalAndGstFee").val(appState.cost.totalAndGstFee);
});

//Click "Add" button Event
$("#addBtn").click(function(e){
	e.preventDefault();
	//Get the selected item
	let selectedItemText = $("#itemList").find(":selected").text();
	let selectedItemValue = $("#itemList").find(":selected").val();
	let selectedItemBond = courtesyList.find(foundItem => foundItem.item.toLowerCase() == selectedItemValue.toLowerCase()).bond;
	
	//Build HTML code of this item
	let newRow = `
				<tr class="newSelectedItem">
					<td>${selectedItemText}</td>
					<td>${selectedItemBond}</td>
				</tr>
	`;
	
	//Check if item being added has already been added and add if it hasn't already
	if(appState.courtesyPhone.item == "none" && selectedItemValue.toLowerCase().includes("phone")) {
		$("#borrowItems").append(newRow);
		//Update appState
		appState.courtesyPhone.item = selectedItemValue;
		appState.courtesyPhone.bond = selectedItemBond;
		appState.cost.bond = appState.courtesyPhone.bond + appState.courtesyCharger.bond;
		appState.cost.totalFee = appState.cost.bond + appState.cost.serviceFee;
		//Update the "bond" element
		if($("#customerType").is(":checked")){
			$("#bond").val(appState.cost.bond);
			$("#totalFee").val(appState.cost.totalFee);
		} else {
			$("#bond").val(0);
			$("#totalFee").val(appstate.business.totalFee);
		}
	} else if(appState.courtesyCharger.item == "none" && selectedItemValue.toLowerCase().includes("charger")) {
		$("#borrowItems").append(newRow);
		//Update appState
		appState.courtesyCharger.item = selectedItemValue;
		appState.courtesyCharger.bond = selectedItemBond;
		appState.cost.bond = appState.courtesyPhone.bond + appState.courtesyCharger.bond;
		appState.cost.totalFee = appState.cost.bond + appState.cost.serviceFee;
		//Update the "bond" element
		if($("#customerType").is(":checked")){
			$("#bond").val(appState.cost.bond);
			$("#totalFee").val(appState.cost.totalFee);
		} else {
			$("#bond").val(0);
			$("#totalFee").val(appstate.business.totalFee);
		}
	} else {
		alert("The selected item was already added")
	}
		//Update total appStates
		appState.cost.totalFee = appState.cost.bond + appState.cost.serviceFee;
		appState.cost.gst = appState.cost.totalFee*0.15;
		appState.cost.totalAndGstFee = appState.cost.totalFee + appState.cost.gst;
		//Update total elements
		$("#totalFee").val(appState.cost.totalFee);
		$("#gst").val(appState.cost.gst);	
		$("#totalAndGstFee").val(appState.cost.totalAndGstFee);
});

//Click "Remove" button event
$('#removeBtn').click(function(e) {
	//Prevent all default actions attached to this button.
	e.preventDefault();
	//Remove all added rows 
	$(".newSelectedItem").remove();
	//Update appState
	appState.courtesyPhone = {item: 'none', bond: 0};
	appState.courtesyCharger = {item: 'none', bond: 0};
	appState.cost = {bond: 0 , serviceFee: 85.00, totalFee: 0, gst: 0, totalAndGstFee: 0}
	//Update appState
	$('#bond').val(0);

	//Update total appStates
	appState.cost.totalFee = appState.cost.bond + appState.cost.serviceFee;
	appState.cost.gst = appState.cost.totalFee*0.15;
	appState.cost.totalAndGstFee = appState.cost.totalFee + appState.cost.gst;
	//Update total elements
	$("#totalFee").val(appState.cost.totalFee);
	$("#gst").val(appState.cost.gst);	
	$("#totalAndGstFee").val(appState.cost.totalAndGstFee);
});

//Change "customer type" event 
$('#customerType').click(function() {
	appState.customerType = 'customer';
	$('#bond').val(appState.courtesyPhone.bond + appState.courtesyCharger.bond);
});

$('#businessType').click(function() {
	appState.customerType = 'business';
	appState.cost = {bond: 0 , serviceFee: 85.00, totalFee: 0, gst: 0, totalAndGstFee: 0}
	$('#bond').val(0);

	//Update total appStates
	appState.cost.totalFee = appState.cost.bond + appState.cost.serviceFee;
	appState.cost.gst = appState.cost.totalFee*0.15;
	appState.cost.totalAndGstFee = appState.cost.totalFee + appState.cost.gst;
	//Update total elements
	$("#totalFee").val(appState.cost.totalFee);
	$("#gst").val(appState.cost.gst);	
	$("#totalAndGstFee").val(appState.cost.totalAndGstFee);
});

//Reset botton
$('#reset').click(function() {
    $('.newSelectedItem').remove();

    //Update the appState
    appState.courtesyPhone = {item: 'none', bond: 0};
    appState.courtesyCharger = {item: 'none', bond: 0};

    $('#bond').val(0.00);
    $('#totalFee').val(0.00);
    $('#gst').val(0.00);
    $('#totalAndGstFee').val(0.00);
});





