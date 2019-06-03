function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
const commands = [`?discord≫Get the Constantiam Discord link.`,`?mapart≫Get the Constantiam map art Discord link.`,`?author≫Returns the bots author.`,`?ph <search term>≫Search PornHub.`,`?tpb <search term>≫Search The Pirate Bay.`,`?fact≫Returns a random fact.`,`?dick <player> <reason>≫Report player for being a dick.`,`?rules≫Lists the rules of the server.`,`?rule <1-47>≫Returns a specific rule of the internet.`,`?8ball <question>≫Ask the magic 8 ball something.`];
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