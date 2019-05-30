function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
const commands = [`?discord≫Get the Constantiam Discord link.`,`?mapart≫Get the Constantiam map art Discord link.`,`?author≫Returns the bots author.`,`?ph <words>≫Search PornHub.`,`?fact≫Returns a random fact.`,`?dick <player> <reason>≫Report player for being a dick.`,`?rules≫Lists the rules of the server.`,`?rule <1-47>≫Returns a specific rule of the internet.`];
var commandshtml = '';
commands.forEach(function(element){
    commandshtml += `<tr>`;
    var row = element.split('≫');
    row.forEach(function(cell){
        commandshtml += `<td>${escapeHTML(cell)}</td>`;
    });

    commandshtml += `<tr>`;
});
window.onload = function(){
    document.getElementById('commands').innerHTML = commandshtml;
};